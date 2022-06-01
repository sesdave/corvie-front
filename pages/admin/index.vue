<template>
  <div class="h-[200vh] p-8 space-y-8">
    <h1 class="text-4xl font-600">Dashboard</h1>

    <div
      class="flex items-center justify-between h-16 px-6 bg-red-50 rounded-2xl"
    >
      <div class="inline-flex items-center space-x-8">
        <div class="ping"></div>
        <p class="font-600">
          New Ticket: You received a new message from A. Elutilo
        </p>
      </div>
      <button class="px-8 py-2 btn btn-primary">View Ticket</button>
    </div>

    <div>
      <h2 class="text-lg font-500">Analytics</h2>

      <div class="flex justify-between mt-4 space-x-4">
        <div v-for="(stat, index) in stats" :key="index" class="flex-1">
          <StatCard :label="stat.label" :value="stat.value" :icon="stat.icon" />
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="flex justify-between">
        <h2 class="text-lg font-500">Recent Applications</h2>
        <NuxtLink class="text-sm text-green-300" to="/admin/applications">
          View all applications
        </NuxtLink>
      </div>

      <div class="mt-6 overflow-hidden border border-gray-300 rounded-xl">
        <table class="w-full text-sm text-left">
          <thead class="bg-gray-100 border-b border-gray-300">
            <tr>
              <th>ID</th>
              <th>Applicant Name</th>
              <th>Field</th>
              <th>Status</th>
              <th>Membership</th>
              <th>Sex</th>
              <th>State/Org.</th>
              <th>Date Applied</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="item in data" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.field }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.membership }}</td>
              <td>{{ item.sex }}</td>
              <td>{{ item.state }}</td>
              <td>{{ item.date_applied }}</td>
              <td>
                {{ item.date_submitted }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import EngineerIcon from '~/assets/icons/engineer.svg?inline'
import BuildingIcon from '~/assets/icons/building.svg?inline'
import CreditCardIcon from '~/assets/icons/credit-card.svg?inline'
import FormIcon from '~/assets/icons/form.svg?inline'

const data = {
  id: '2739',
  name: 'Muhammed Yaradua',
  field: 'Civil',
  status: 'Approved',
  membership: true,
  sex: 'M',
  state: 'Kaduna',
  date_applied: '25/02/2005',
  date_submitted: '25/02/2005',
}

const stats = [
  { label: 'Registered Engineers', value: '2,947', icon: EngineerIcon },
  { label: 'Registered Firm', value: '872', icon: BuildingIcon },
  { label: 'Total Revenue', value: 'N47,284,932', icon: CreditCardIcon },
  { label: 'Processed Application', value: '8,467', icon: FormIcon },
]

export default {
  name: 'AdminDashboard',

  data() {
    return {
      data: [...new Array(10)].map((_, i) => ({ ...data, id: data.id + i })),
      stats,
    }
  },
}
</script>

<style lang="postcss" scoped>
th {
  @apply px-2 py-3 font-400 text-gray-500;
}

td:first-child,
th:first-child {
  @apply pl-8;
}

td {
  @apply px-2 py-4 whitespace-nowrap;
}

tr:nth-child(even) {
  @apply bg-gray-200;
}
</style>
