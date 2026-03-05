import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nam & An Honeymoon',
    short_name: 'Honeymoon',
    description: 'Lịch trình tuần trăng mật của Nam và An',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f43f5e',
    icons: [
      {
        src: 'https://picsum.photos/seed/honeymoon/192/192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://picsum.photos/seed/honeymoon/512/512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
