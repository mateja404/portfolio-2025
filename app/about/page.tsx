import AboutPage from "../components/About";

export default function About() {
  return (
    <div className="relative flex min-h-screen w-full bg-emerald-950/60">
      <div className="absolute inset-0 
        [background-size:12px_12px]
        [background-image:linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] ">
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
      <div className="w-full h-full flex z-20">
        <AboutPage/>
      </div>
    </div>
  );
}