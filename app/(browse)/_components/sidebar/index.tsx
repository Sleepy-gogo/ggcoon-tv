import { Wrapper } from './wrapper';
import { Toggle, ToggleSkeleton } from './toggle';
import { Recommended, RecommendedSkeleton } from './recommended';
import { Following, FollowingSkeleton } from './following';

import { getRecommended } from '@/lib/recommended-service';
import { getFollowedUsers } from '@/lib/follow-service';

async function Sidebar() {
  const recommended = await getRecommended();
  const followed = await getFollowedUsers();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={followed} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
}

export default Sidebar;

export function SidebarSkeleton() {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
}
