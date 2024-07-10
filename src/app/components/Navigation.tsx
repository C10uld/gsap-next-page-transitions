import TransitionLinck from "./TransitionLink";

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-900">
        rithmic
      </h1>
      <div className="flex gap-5">
        <TransitionLinck href="/" label="Home" />
        <TransitionLinck href="/work" label="Work" />
        <TransitionLinck href="/about" label="About" />
      </div>
    </nav>
  );
};

export default Navigation;
