import { tag } from "parcel/mod.ts";
import { state } from "parcel/state/mod.ts";

export default () => {
  const [count, setCount] = state(0);

  return (
    <div class="flex my-4">
      <button
        class="p-4 rounded bg-green-100"
        on-click={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <div class="p-4">{count}</div>
      <button
        class="p-4 rounded bg-green-100"
        on-click={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
