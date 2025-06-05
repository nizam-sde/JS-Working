/* proxy -
  A Proxy in JavaScript is like a helper that watches over an object. 
    It can change or control what happens when you get or set values in that object.
    This helps to add extra features like checking data or logging actions.

 reflect object -
    Reflect is a built-in object that helps perform common actions on objects,
    like getting or setting properties. It works well with Proxy to handle object operations
    safely and clearly. */

/* **********************************************************
    const p {
        age : 21
    }

    Possibiliteis of what user can change on p

    p.age =60
    p.newProperty = "ABC"
    p.age = -10
    p.age = "Hello"

    if we give full control access to the user it might be an issue becasue
    he can put and erronumous data which will introduce bug or data error in our code 
    which might be issue for us (we know objects are memory reference of original data
    thats why it can be manupulated by user during interaction)

    so we add proxy as a layer of security taki jo as a developer jis desired format me mujhe
    data chahiye usi format me user ke unnecessary interaction ko restrict kr ke desired
    data output le pau.
   ********************************************************** */

    const p1 ={
      fName : "Mohammad",
      lName : "Nizam",
      age : 21
    }