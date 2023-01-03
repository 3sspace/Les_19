let property = prompt(
    "Enter display property!",
    'Enter here'
    );
switch(property){
    case "block":
    alert("Set `display:block;`");
    break;
    case "flex":
    alert("Set `display:flex;`");
    break;
    case "grid":
    alert("Set `display:grid;`");
    break;
    case "inline":
    alert("Set `display:inline;`");
    break;
    case "none":
    alert("Set `display:none;`");
    break;
    default:
    alert("Set `display:inline-block;`");
}