<template>
  <DropdownMenu offset-y="40px">
    <template #button="{ isShown }">
      <button class="inline-flex items-center space-x-5 group">
        <div
          class="inline-flex items-center justify-center text-white bg-green-900 h-9 w-9 rounded-xl"
        >
          PM
        </div>
        <div class="text-green-900 font-700">Portal Manager</div>
        <div
          class="inline-flex items-center justify-center w-6 h-6 rounded-full group-hover:bg-green-50"
          :class="{ 'bg-green-50': isShown }"
        >
          <CaretDownIcon
            class="transition-transform duration-300 ease-in-out-back"
            :class="{ 'transform rotate-180': isShown }"
          />
        </div>
      </button>
    </template>
    <div class="px-2 pb-4 text-sm bg-white w-max rounded-xl">
      <div class="py-2">
        <button
          v-for="item in menu"
          :key="item.name"
          class="flex items-center w-full px-4 py-2 space-x-3 hover:bg-green-50 rounded-xl"
        >
          <component :is="item.icon" width="16" height="16" />
          <span>{{ item.name }}</span>
        </button>
      </div>

      <div class="py-2 border-t border-gray-200">
        <button
          class="flex items-center w-full px-4 py-2 space-x-3 text-red-100 rounded-xl hover:bg-red-50"
        >
          <ExitIcon width="16" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  </DropdownMenu>
</template>

<script>
import Vue from 'vue'
import LockIcon from '~/assets/icons/lock.svg?inline'
import SwitchIcon from '~/assets/icons/switch.svg?inline'
import UserIcon from '~/assets/icons/user.svg?inline'
import ExitIcon from '~/assets/icons/exit.svg?inline'
import GearIcon from '~/assets/icons/gear.svg?inline'
import CaretDownIcon from '~/assets/icons/caret-down.svg?inline'

const MENU = [
  {
    name: 'Profile',
    action: 'profile',
    icon: UserIcon,
  },
  {
    name: 'Account Settings',
    action: 'settings',
    icon: GearIcon,
  },
  {
    name: 'Change Password',
    action: 'change-password',
    icon: LockIcon,
  },
  {
    name: 'Switch to Engr. Account',
    action: 'switch',
    icon: SwitchIcon,
  },
]

export default Vue.extend({
  components: {
    UserIcon,
    ExitIcon,
    CaretDownIcon,
  },
  data() {
    return {
      menu: MENU,
    }
  },
})
</script>
