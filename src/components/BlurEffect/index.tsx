import { Blur } from './styles';

interface BlurEffectProps {
  position: string;
}

export function BlurEffect({ position }: BlurEffectProps) {
  return <Blur className={`${'blurEffect_' + position}`} />;
}
