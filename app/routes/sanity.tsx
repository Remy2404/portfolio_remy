export default function Sanity() {
  console.log("[SSR] Rendering sanity route");
  return (
    <div className="min-h-screen grid place-items-center text-white">
      <div>
        <h1 className="text-4xl font-bold">SSR baseline</h1>
        <p className="opacity-70">
          If you can see this, SSR is wiring correctly.
        </p>
      </div>
    </div>
  );
}
