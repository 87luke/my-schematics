<% for(let i = 0; i < actions.length; i++) { %>export const <%= upperCase(actions[i].type) %> = '<%= upperCase(actions[i].type) %>';
<% } %>