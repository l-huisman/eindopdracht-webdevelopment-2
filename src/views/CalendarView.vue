<script lang="ts" setup>
    import {computed, onMounted, ref} from 'vue';
    import {useAuthStore} from "@/stores/auth.ts";
    import axiosInstance from "@/utils/axiosInstance.ts";
    import NavigationBar from "@/views/NavigationBar.vue";
    import GroupSelector from "@/components/GroupSelector.vue";

    const weekNumber = ref(1);
    const userGroups = ref([]);
    const userEvents = ref([]);
    const selectedGroups = ref([]);

    onMounted(() => {
      getUserGroups();
      console.log(userGroups);
    });

    const days = ref([
      {
        name: 'Monday',
        day: 1, month: 3, year: 2025,
        groups: [
          {
            groupId: 1,
            name: 'Family',
            events: [
              {name: 'Sport', description: '', time: 12, time_end: 16, day: 1, month: 3, year: 2025},
              {name: 'Work', description: '', time: 13, time_end: 17, day: 1, month: 3, year: 2025},
              {name: 'Dinner', description: '', time: 21, time_end: 24, day: 1, month: 3, year: 2025},
            ]
          },
        ]
      }, {
        name: 'Tuesday', groups: []
      },
      {
        name: 'Wednesday', groups: []
      },
      {
        name: 'Thursday', groups: []
      },
      {
        name: 'Friday', groups: []
      },
      {
        name: 'Saturday', groups: []
      },
      {
        name: 'Sunday', groups: []
      },
    ]);

    const getUserGroups = async () => {
      try {
        const authStore = useAuthStore();
        const userId = authStore.getId()
        const response = await axiosInstance.get(`/groups/user/${userId}`);
        if (response.status === 200) {
          userGroups.value = response.data;
        } else {
          console.error('Failed to fetch user groups:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user groups:', error);
        return [];
      }
    };

    const getGroupEvents = async () => {
      // TODO: Implement this function to fetch events from all groups
    };

    const filteredDays = computed(() => {
      return days.value.map(day => ({
        ...day,
        groups: day.groups.filter(group => selectedGroups.value.includes(group.name))
      }));
    });


    // TODO: Find a better way to assign a color to a group
    const getGroupColor = (group: string) => {
      switch (group) {
        case 'Group 1':
          return 'bg-yellow-500';
        case 'Group 2':
          return 'bg-green-500';
        case 'Group 3':
          return 'bg-red-500';
        default:
          return 'bg-gray-500';
      }
    };
    </script>

    <template>
      <div class="flex flex-col h-svh">
        <NavigationBar/>
        <div class="flex flex-1">
          <GroupSelector :groups="userGroups" :selectedGroups="selectedGroups"
                         @update:selectedGroups="val => selectedGroups = val"/>
          <main class="flex-1 flex">
            <div class="flex-1 flex justify-center items-center">
              <div class="w-full h-full pb-5 bg-white rounded-lg">
                <div class="grid grid-cols-22 gap-3 pt-3 mx-3">
                  <div class="py-4 bg-gray-100 text-center font-bold rounded-2xl col-span-1">Time</div>
                  <div v-for="day in filteredDays" :key="day.name"
                       class="py-4 bg-gray-100 text-center font-bold rounded-2xl col-span-3">
                    {{ day.name }}
                  </div>
                </div>
                <div class="grid grid-cols-22 gap-3 mx-3 grid-flow-row">
                  <div class="text-center col-span-1 row-span-1">
                    <div v-for="hour in 24" :key="hour" class="py-3 bg-gray-100 rounded-2xl mt-3">
                      {{ hour < 11 ? `0${hour - 1}:00` : `${hour - 1}:00` }}
                    </div>
                  </div>
                  <div v-for="day in filteredDays" :key="day.name"
                       :class="`grid gap-3 col-span-3 grid-cols-${selectedGroups.length}`">
                    <div v-for="group in day.groups" :key="group.name"
                         class="grid col-span-1 gap-3 grid-rows-24">
                      <div v-for="event in group.events" :key="event.name"
                           :class="`rounded-lg h-full p-2 mt-2 shadow-md font-bold text-center row-span-${event.time_end - event.time} row-start-${event.time+1} ${getGroupColor(group.name)}`">
                        {{ event.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </template>
