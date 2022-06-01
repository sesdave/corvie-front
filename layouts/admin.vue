<template>
  <div class="flex items-stretch h-screen bg-gray-50">
    <aside
      class="flex flex-col flex-grow max-w-xs overflow-auto bg-green-800 font-500"
    >
      <div
        class="sticky top-0 z-10 flex items-center justify-center flex-none h-24 bg-green-800 border-b border-green-500"
      >
        <Logo />
      </div>
      <div
        class="flex flex-col flex-grow py-6 pl-6 text-green-100 bg-green-700"
      >
        <MenuItem
          v-for="item in menu"
          :key="item.label"
          :label="item.label"
          :to="item.to"
          :children="item.children"
          :icon="item.icon"
        />
      </div>
      <div
        class="flex items-center justify-center flex-none h-24 border-t border-green-500"
      >
        <button
          class="inline-flex items-center justify-center px-12 py-3 space-x-4 text-lg btn btn-primary font-700"
        >
          <ExitIcon stroke-width="2" width="1em" height="1em" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
    <main class="flex-1 overflow-auto">
      <header
        class="sticky top-0 z-10 flex items-center justify-end h-24 bg-white border-b border-gray-200 px-9"
      >
        <div class="flex space-x-6">
          <button
            class="relative inline-flex items-center justify-center bg-green-100 rounded-xl h-9 w-9"
          >
            <div class="absolute top-0 right-0 ping"></div>
            <BellIcon />
          </button>
          <ProfileMenu />
        </div>
      </header>
      <div>
        <NuxtChild />
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import EngineerIcon from '~/assets/icons/engineer.svg?inline'
import FormIcon from '~/assets/icons/form.svg?inline'
import BuildingIcon from '~/assets/icons/building.svg?inline'
import ShieldIcon from '~/assets/icons/shield.svg?inline'
import GearIcon from '~/assets/icons/gear.svg?inline'
import FeedbackIcon from '~/assets/icons/feedback.svg?inline'
import EyeIcon from '~/assets/icons/eye.svg?inline'
import MessagesIcon from '~/assets/icons/messages.svg?inline'
import VerificationIcon from '~/assets/icons/verification.svg?inline'
import CreditCardIcon from '~/assets/icons/credit-card.svg?inline'
import EnvelopeIcon from '~/assets/icons/envelope.svg?inline'
import HomeIcon from '~/assets/icons/home.svg?inline'
import BellIcon from '~/assets/icons/bell.svg?inline'
import ProfileMenu from '~/modules/admin/components/ProfileMenu.vue'
import ExitIcon from '~/assets/icons/exit.svg?inline'

const MENU = [
  {
    to: '/admin',
    label: 'Dashboard',
    icon: HomeIcon,
  },
  {
    to: '/admin/engineers',
    label: 'Engineers',
    icon: EngineerIcon,
    children: [
      { label: 'Manage Engineers', to: '/admin/engineers' },
      { label: 'Owing Engineers', to: '/admin/owning-engineers' },
      { label: 'Practice Fee', to: '/admin/practice-fee' },
    ],
  },
  {
    to: '/admin/applications',
    label: 'Applications',
    icon: FormIcon,
  },
  {
    to: '/admin/firms',
    label: 'Firms',
    icon: BuildingIcon,
  },
  {
    to: '/admin/financial',
    label: 'Financial',
    icon: CreditCardIcon,
  },
  {
    to: '/admin/messages',
    label: 'Messages',
    icon: EnvelopeIcon,
  },
  {
    to: '/admin/security',
    label: 'Security',
    icon: ShieldIcon,
  },
  {
    to: '/admin/settings',
    label: 'Settings',
    icon: GearIcon,
  },
  {
    to: '/admin/feedback',
    label: 'Feedback',
    icon: FeedbackIcon,
  },
  {
    to: '/admin/witness-reports',
    label: 'Eye Witness Report',
    icon: EyeIcon,
  },
  {
    to: '/admin/contact-messages',
    label: 'Contact Messages',
    icon: MessagesIcon,
  },
  {
    to: '/admin/accreditation',
    label: 'Accreditation',
    icon: VerificationIcon,
  },
]

export default Vue.extend({
  name: 'AdminPage',
  components: {
    BellIcon,
    ProfileMenu,
    ExitIcon,
  },
  layout: 'admin',
  middleware: ['cache'],
  data() {
    return { menu: MENU }
  },
  meta: {
    cache: 'static',
  },
})
</script>
