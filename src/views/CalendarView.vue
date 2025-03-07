<script setup lang="ts">
import {computed, ref} from 'vue';
import NavigationBar from "@/views/NavigationBar.vue";
import GroupSelector from "@/components/GroupSelector.vue";

const days = ref([
  {
    name: 'Monday', groups: [
      {
        name: 'Group 1',
        events: [{name: 'Event 1', time: 12, time_end: 16}, {
          name: 'Event 1',
          time: 13,
          time_end: 17
        }, {name: 'Event 1', time: 21, time_end: 24}]
      },
      {
        name: 'Group 2',
        events: [{name: 'Event 1', time: 1, time_end: 3}, {
          name: 'Event 1',
          time: 5,
          time_end: 7
        }, {name: 'Event 1', time: 9, time_end: 11}]
      },
      {
        name: 'Group 3',
        events: [{name: 'Event 1', time: 2, time_end: 4}, {
          name: 'Event 1',
          time: 6,
          time_end: 8
        }, {name: 'Event 1', time: 10, time_end: 12}]
      }
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

const selectedGroups = ref(['Group 1']);

const filteredDays = computed(() => {
  return days.value.map(day => ({
    ...day,
    groups: day.groups.filter(group => selectedGroups.value.includes(group.name))
  }));
});

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
      <GroupSelector :groups="['Group 1', 'Group 2', 'Group 3']" :selectedGroups="selectedGroups" @update:selectedGroups="val => selectedGroups = val" />
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
