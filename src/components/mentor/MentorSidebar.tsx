
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Presentation,
  MessageSquare,
  Calendar,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/mentor",
    icon: LayoutDashboard,
  },
  {
    title: "Assigned Pitches",
    path: "/mentor/pitches",
    icon: Presentation,
  },
  {
    title: "Feedback History",
    path: "/mentor/feedback",
    icon: MessageSquare,
  },
  {
    title: "Schedule",
    path: "/mentor/schedule",
    icon: Calendar,
  },
  {
    title: "Settings",
    path: "/mentor/settings",
    icon: Settings,
  },
];

const MentorSidebar = () => {
  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Mentor Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default MentorSidebar;
