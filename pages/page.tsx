import { tag } from "parcel/mod.ts";
import Counter from "app/Counter$.tsx";

export default () => {
  return (
    <div>
      <h1 class="text-4xl font-bold">Hello World!</h1>
      <Counter />
    </div>
  );
};
