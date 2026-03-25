import { Button } from '@/components/ui/button';
import { CentralAnimation } from './central-animation';

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="flex h-full w-full flex-col items-center justify-center gap-12">
      <section className="flex flex-col items-center justify-center bg-transparent text-center">
        <div className="mb-8 opacity-60">
          <CentralAnimation isActive={false} isSpeaking={false} />
        </div>

        <div className="space-y-2">
          <h1 className="text-primary font-mono text-sm tracking-[0.3em] uppercase opacity-80">
            Awaiting Authorization
          </h1>
          <p className="text-primary/60 max-w-prose pt-1 font-mono text-xs leading-6 tracking-wider uppercase">
            Secure Vocal Command Interface
          </p>
        </div>

        <Button
          size="lg"
          onClick={onStartCall}
          className="border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary hud-glow mt-10 w-64 rounded-none border font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300"
        >
          {startButtonText}
        </Button>
      </section>

      <div className="flex flex-col items-center gap-2 opacity-30 transition-opacity duration-500 hover:opacity-100">
        <p className="text-primary/60 font-mono text-[10px] tracking-widest uppercase">
          Neural Link Protocol v4.2
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.livekit.io/agents/start/voice-ai/"
          className="hover:text-primary font-mono text-[9px] tracking-widest uppercase underline"
        >
          View Documentation
        </a>
      </div>
    </div>
  );
};
