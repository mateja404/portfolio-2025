import ProjectsPage from "../components/Projects";

export default function Projects() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-emerald-950/60">
      <div className="absolute inset-0 
        [background-size:12px_12px]
        [background-image:linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)]">
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
      <div className="relative z-20 flex-1 flex w-full">
        <ProjectsPage />
      </div>
    </div>
  );
}