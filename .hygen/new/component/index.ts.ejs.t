---
to: <%= abs_path %>/index.ts
---
export {default as <%= component_name %>} from './<%= component_name %>.vue'
<% if (have_props) { -%>

export interface <%= component_name %>Props {}
<% } -%>
