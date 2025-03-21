// src/components/PageWrapper.tsx
import { component$, Slot } from '@builder.io/qwik';

export const PageWrapper2 = component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-1.5 border-radius-dot-25 rounded-lg">
      <div class="relative w-full max-w-7xl mx-auto px-1.5 py-1.5 lg:px-8">
          <Slot />
      </div>
    </div>
  );
});
