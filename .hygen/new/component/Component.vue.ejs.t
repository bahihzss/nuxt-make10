---
to: <%= abs_path %>/<%= component_name %>.vue
---
<script setup lang="ts">
<% if (have_props) { -%>

const props = defineProps<{}>()
<% } -%>
</script>

<template>
<%- have_style ? `<${tag} class="${component_name}">` : `<${tag}>` %><%- have_children ? '<slot />' : '' %><%- `</${tag}>` %>
</template>

<% if (have_style) { -%>
<style scoped>
.<%= component_name %> {}
</style>
<% } -%>