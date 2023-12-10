import React from 'react'
import LogoImage from '../../images/logos/black.svg'
import { AspectRatio } from '../ui/aspect-ratio'
import Link from 'next/link'
import Image from 'next/image'
const Logo = () => {
  return (
      <Link href="/" prefetch={false} className="overflow-hidden">
          <div className="flex items-center w-72 h-14">
              <AspectRatio
                  ratio={16 / 9}
                  className="flex justify-center items-center w-full h-full"
              >
                  <Image
                      priority
                      src={LogoImage}
                      alt="logo"
                      className="dark:filter dark:invert fill-opacity-0"
                  />
              </AspectRatio>
          </div>
      </Link>
  );
}

export default Logo