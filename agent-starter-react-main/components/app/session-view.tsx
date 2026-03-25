'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Track } from 'livekit-client';
import { AnimatePresence, motion } from 'motion/react';
import {
  useRemoteParticipants,
  useSessionContext,
  useSessionMessages,
  useTrackVolume,
  useVoiceAssistant,
} from '@livekit/components-react';
import type { AppConfig } from '@/app-config';
import {
  AgentControlBar,
  type AgentControlBarControls,
} from '@/components/agents-ui/agent-control-bar';
import { TileLayout } from '@/components/app/tile-layout';
import { cn } from '@/lib/shadcn/utils';
import { Shimmer } from '../ai-elements/shimmer';
import { CentralAnimation } from './central-animation';

const MotionBottom = motion.create('div');

const MotionMessage = motion.create(Shimmer);

const BOTTOM_VIEW_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
      translateY: '0%',
    },
    hidden: {
      opacity: 0,
      translateY: '100%',
    },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: {
    duration: 0.3,
    delay: 0.5,
    ease: 'easeOut' as const,
  },
};

const SHIMMER_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeIn' as const,
        duration: 0.5,
        delay: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        ease: 'easeIn' as const,
        duration: 0.5,
        delay: 0,
      },
    },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
};

interface FadeProps {
  top?: boolean;
  bottom?: boolean;
  className?: string;
}

export function Fade({ top = false, bottom = false, className }: FadeProps) {
  return (
    <div
      className={cn(
        'from-background pointer-events-none h-4 bg-linear-to-b to-transparent',
        top && 'bg-linear-to-b',
        bottom && 'bg-linear-to-t',
        className
      )}
    />
  );
}

interface SessionViewProps {
  appConfig: AppConfig;
  onManualDisconnect?: () => void;
}

export const SessionView = ({
  appConfig,
  onManualDisconnect,
  ...props
}: React.ComponentProps<'section'> & SessionViewProps) => {
  const session = useSessionContext();
  const { messages } = useSessionMessages(session);
  const [chatOpen, setChatOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { audioTrack } = useVoiceAssistant();
  const volume = useTrackVolume(audioTrack);
  const isSpeaking = volume > 0.05;

  const controls: AgentControlBarControls = {
    leave: true,
    microphone: true,
    chat: appConfig.supportsChatInput,
    camera: appConfig.supportsVideoInput,
    screenShare: appConfig.supportsScreenShare,
  };

  useEffect(() => {
    const lastMessage = messages.at(-1);
    const lastMessageIsLocal = lastMessage?.from?.isLocal === true;
    if (scrollAreaRef.current && lastMessageIsLocal) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleDisconnect = () => {
    if (onManualDisconnect) onManualDisconnect();
    try {
      if (session.end) session.end();
    } catch (e) {
      console.warn('Erro ao desconectar sessão:', e);
    }
  };

  return (
    <section
      className="relative flex h-full w-full flex-col overflow-hidden bg-transparent"
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={session.isConnected ? 'ai-active' : 'ai-disconnected'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <CentralAnimation isActive={session.isConnected} isSpeaking={isSpeaking} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 opacity-40 transition-opacity duration-500 hover:opacity-100">
          <TileLayout chatOpen={chatOpen} />
        </div>
      </div>

      <div className="pointer-events-none flex-1" />

      <MotionBottom
        {...BOTTOM_VIEW_MOTION_PROPS}
        className="absolute bottom-6 left-1/2 z-50 w-full max-w-2xl -translate-x-1/2 px-3"
      >
        {appConfig.isPreConnectBufferEnabled && (
          <AnimatePresence>
            {messages.length === 0 && (
              <MotionMessage
                key="pre-connect-message"
                duration={2}
                aria-hidden={messages.length > 0}
                {...SHIMMER_MOTION_PROPS}
                className="pointer-events-none mx-auto block w-full max-w-2xl pb-8 text-center text-sm font-semibold"
              >
                O Jarvis está ouvindo, pode falar...
              </MotionMessage>
            )}
          </AnimatePresence>
        )}

        <div className="relative mx-auto max-w-2xl bg-transparent">
          <AgentControlBar
            variant="livekit"
            controls={controls}
            isChatOpen={chatOpen}
            isConnected={true}
            onDisconnect={handleDisconnect}
            onIsChatOpenChange={setChatOpen}
          />
        </div>
      </MotionBottom>
    </section>
  );
};
