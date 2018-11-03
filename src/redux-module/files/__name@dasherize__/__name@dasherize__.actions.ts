import {
    <% for(let i = 0; i < actions.length; i++) { if(actions[i] && actions[i].type) { %><%= upperCase(actions[i].type) %>,
    <% } } %>
} from "./<%=dasherize(name)%>.constants";

<% for(let i = 0; i < actions.length; i++) { if(actions[i] && actions[i].type) { %>
export const <%= lowerCase(actions[i].type) %> = () => ({
    type: <%= upperCase(actions[i].type) %>
});
<% } } %>