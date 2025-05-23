import Image from 'next/image';

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '' }: IconProps) {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 p-1.5">
      <Image
        src={`/icons/${name.toLowerCase()}.svg`}
        alt={`${name} icon`}
        width={24}
        height={24}
        className={`w-6 h-6 ${className} [filter:invert(0.3)_sepia(0)_saturate(1)_hue-rotate(0deg)_brightness(0.8)] dark:[filter:invert(0.8)_sepia(0)_saturate(1)_hue-rotate(0deg)_brightness(1.2)]`}
      />
    </div>
  );
}
