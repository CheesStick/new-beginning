import { NavElement } from './'

const NavBar = () => {
  return (
    <div className='col-span-3 flex justify-start items-start flex-col gap-y-5 ml-10'>
      <NavElement icon='akar-icons:home-alt1' text='Home' to='/user/feed' />
      <NavElement icon='jam:messages' text='Messages' to='/user/messages' />
      <NavElement icon='iconoir:profile-circled' text='Profile' to='/user/profile' />
      <NavElement icon='ic:sharp-support-agent' text='Support' to='/user/support' />
    </div>
  );
}
 
export default NavBar;