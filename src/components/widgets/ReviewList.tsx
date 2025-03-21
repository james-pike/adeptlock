import { component$ } from "@builder.io/qwik";

const reviews = [
  {
    title: "Great insights and generous heart",
    text: "Thanks Dave Andrews for your great insights, talent and generous heart!",
    name: "Carole Françoise Noel",
    position: "CTO at Open AI",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },
  {
    title: "Collaboration between artist and printer",
    text: "It's always a collaboration between photographer and printer, and he is an artist from whom I learn so very much!",
    name: "Ruth Dick",
    position: "Software Engineer at Tesla",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
  },
  {
    title: "Always high-caliber work",
    text: "Dave is an artist in his own right who shares his knowledge with his clients willingly. His work is beautiful and always of the same high caliber. I only use Dave!",
    name: "Joy Kardish",
    position: "CEO at Oracle",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
  {
    title: "Attention to detail",
    text: "Dave is the best! Great results & attention to detail from start to finish.",
    name: "Andrew Balfour",
    position: "CTO at Open AI",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },
  {
    title: "Dedicated to the artists",
    text: "Dave invests himself in the work he prints for the artists he serves.",
    name: "Alan Mirabelli",
    position: "Software Engineer at Tesla",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
  },
  {
    title: "Craftsmanship and love",
    text: "Dave’s attention to detail and love of the craft is evident in his prints.",
    name: "Beth Gordon",
    position: "CEO at Oracle",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
];

export default component$(() => {
  return (
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map(({ title, text, name, position, image }, index) => (
        <figure
          key={index}
          class="group p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition-transform hover:scale-105"
        >
          <blockquote class="text-sm text-gray-600 dark:text-gray-400 space-y-3">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p>{`"${text}"`}</p>
          </blockquote>
          <figcaption class="flex items-center mt-4 space-x-3">
            <img
              class="w-24 h-24 rounded-full object-cover"
              src={image}
              alt={`${name} profile picture`}
            />
            <div class="space-y-1">
              <div class="text-base font-medium text-gray-900 dark:text-white">{name}</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">{position}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
});
