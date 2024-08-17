import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-full sm:grid sm:grid-cols-[16rem_1fr] sm:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
