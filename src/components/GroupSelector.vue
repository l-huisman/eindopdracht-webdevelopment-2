<script lang="ts" setup>
import {ref, watch} from 'vue';

const props = defineProps({
  groups: {
    type: Array as () => string[],
    required: true
  },
  selectedGroups: {
    type: Array as () => string[],
    required: true
  }
});

const emit = defineEmits(['update:selectedGroups']);
const localSelectedGroups = ref([...props.selectedGroups]);

watch(localSelectedGroups, (newVal) => {
  emit('update:selectedGroups', newVal);
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
  <aside class="w-56 bg-gray-100 p-4 flex flex-col items-center">
    <h2 class="text-xl font-bold mb-4">Select Groups</h2>
    <div v-for="group in groups" :key="group" class="mb-2 w-full">
      <label
        :class="`flex items-center space-x-2 py-3 rounded-lg shadow-md ${getGroupColor(group)} ${localSelectedGroups.includes(group) ? 'border-4 border-blue-500' : 'bg-gray-300'}`">
        <input v-model="localSelectedGroups" :value="group" class="hidden cursor-pointer" type="checkbox">
        <span class="text-white text-xl font-bold text-center w-full">{{ group }}</span>
      </label>
    </div>

    <form>
      <h1 class="text-xl font-bold mb-4 text-center">New Event</h1>
      <input id="eventName" v-model="eventName" class="border-2 p-2 mb-3 border-gray-300 w-full" type="text"
             placeholder="Event Name"/>
      <textarea id="eventDescription" v-model="eventDescription"
                class="border-2 p-2 mb-3 border-gray-300 w-full" placeholder="Event Description"></textarea>
      <input id="eventDate" v-model="eventDate" class="border-2 p-2 mb-3 border-gray-300 w-full" type="date"/>
      <input id="eventStartTime" v-model="eventStartTime" class="border-2 p-2 mb-3 border-gray-300 w-full" type="time"/>
      <input id="eventEndTime" v-model="eventEndTime" class="border-2 p-2 mb-3 border-gray-300 w-full" type="time"/>
      <select id="groupName" v-model="groupName" class="border-2 p-2 mb-3 border-gray-300 w-full">
        <option v-for="group in groups" :key="group" :value="group">{{ group }}</option>
      </select>
      <button class="bg-cyan-900 text-white py-2 px-4 rounded-lg hover:bg-cyan-950 transition duration-200">Apply</button>
    </form>
  </aside>
</template>
