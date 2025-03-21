import { component$, useStore } from "@builder.io/qwik";
import IconMenu from "~/components/icons/IconMenu"

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;

  const store = useStore({
    isExpanded: false,
  });

  return (
    <button
      type="button"
      class={`ml-1.5 text-white dark:text-black bg-primary-600 hover:bg-primary focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-sm text-sm p-2.5 inline-flex items-center transition ${
        store.isExpanded ? "expanded" : ""
      }`}
      aria-label="Toggle Menu"
      onClick$={() => {
        store.isExpanded = store.isExpanded ? false : true;

        // TODO:
        document.body.classList.toggle("overflow-hidden");
        document.getElementById("header")?.classList.toggle("h-screen");
        document.querySelector("#header nav")?.classList.toggle("hidden");
      }}
    >
      <IconMenu class={iconClass} />
    </button>
  );
});
