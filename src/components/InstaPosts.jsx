import { motion } from 'framer-motion';

const photos = [
  { id: 1, url: 'https://scontent.fykz1-1.fna.fbcdn.net/v/t39.30808-6/457016149_926315756206751_6026729787020638588_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Iu5XPtzML0QQ7kNvgHSJexz&_nc_ht=scontent.fykz1-1.fna&oh=00_AYCEDaKOS68XRaG1LtyQ8yXyJUPvIsTtHXBwbwTHvT5Xtw&oe=66D2DDEE', name: 'Photo 1' },
  { id: 2, url: 'https://scontent.fykz1-1.fna.fbcdn.net/v/t39.30808-6/456895071_926315509540109_7438545997125326474_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Fe8qKpTYibkQ7kNvgE-9bqM&_nc_ht=scontent.fykz1-1.fna&oh=00_AYARE6mHJFCKcU0W1lUHlbvnfLVuIeZb-LMPGzSYcXs6RA&oe=66D2EF57', name: 'Photo 2' },
  { id: 3, url: 'https://scontent.fykz1-1.fna.fbcdn.net/v/t39.30808-6/457037271_926315319540128_3772946991282163525_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KUxKCRkR2rsQ7kNvgFnC7Nf&_nc_ht=scontent.fykz1-1.fna&oh=00_AYA7_42XSqwA5hq2dnOQcVvsTSCwnRSv9OpKXBEGctK7RA&oe=66D2F236', name: 'Photo 3' },
  { id: 4, url: 'https://scontent.fykz1-2.fna.fbcdn.net/v/t39.30808-6/457265978_926185429553117_6268867015538833609_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=me262_EvTJQQ7kNvgFDHKMV&_nc_ht=scontent.fykz1-2.fna&oh=00_AYAop5EaBZsY7oOKQStZSgI83XfyXd8aIrg_eMFAwIuuFg&oe=66D2EA08', name: 'Photo 4' },
  { id: 5, url: 'https://scontent.fykz1-1.fna.fbcdn.net/v/t39.30808-6/456855873_926185262886467_36624771964196391_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Nu48E6ZWyP0Q7kNvgGlwYhs&_nc_ht=scontent.fykz1-1.fna&oh=00_AYBhkAOm7QmtjWXCUlYlY0D8i12QiunW9r2jB63xK1YXew&oe=66D2FC4D', name: 'Photo 5' },
  // Add more photos here
];

const InstaPosts = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16 px-4 pb-16">
      <h1 className="text-2xl font-bold mb-6 text-center pt-20">Posts</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img src={photo.url} alt={photo.name} className="w-full h-auto rounded-lg" />
              <p className="mt-2 text-center font-semibold">{photo.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstaPosts;
