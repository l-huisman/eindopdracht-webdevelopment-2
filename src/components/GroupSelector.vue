<script setup lang="ts">
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
  <aside class="w-64 bg-gray-100 p-4 flex flex-col items-center">
    <h2 class="text-xl font-bold mb-4">Select Groups</h2>
    <div v-for="group in groups" :key="group" class="mb-2 w-full">
      <label
        :class="`flex items-center space-x-2 py-3 rounded-lg shadow-md ${getGroupColor(group)} ${localSelectedGroups.includes(group) ? 'border-4 border-blue-500' : 'bg-gray-300'}`">
        <input type="checkbox" :value="group" v-model="localSelectedGroups" class="hidden">
        <span class="text-white text-xl font-bold text-center w-full">{{ group }}</span>
      </label>
    </div>
  </aside>
</template>
