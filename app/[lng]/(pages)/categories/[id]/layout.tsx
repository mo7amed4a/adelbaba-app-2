import FilterINsidebar from "@/components/categories/filterINsidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";


export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>
}) {
  const { id } = (await params)
  return (
    <div className="relative">
      <SidebarProvider>
        {/* start sidebar */}
        <Sidebar className="md:sticky xl:w-96 top-0 flex flex-col items-center border-none">
          <div className="h-full flex flex-col items-center bg-white">
            <SidebarContent className="w-full lg:w-2/4 border mt-5 bg-transparent">
              <SidebarHeader>
                <h1 className="text-center text-lg md:text-xl text-primary font-bold">
                  {id}
                </h1>
              </SidebarHeader>
              <SidebarGroup>
                <h4 className="font-bold">Filter</h4>
              </SidebarGroup>
              <SidebarGroup>
                {/* <h4 className="font-bold">Filter</h4> */}
                <FilterINsidebar />
              </SidebarGroup>
              {/* <SidebarGroup /> */}
            </SidebarContent>
          </div>
          <SidebarFooter />
        </Sidebar>
        {/* end sidebar */}
        <main className="w-full">
          <SidebarTrigger className="md:hidden">
            <span>kwemkom</span>
          </SidebarTrigger>
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
