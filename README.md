#### Step 4: Add ordering to your API
For the occupations endpoint, let's have a way for the client to get a specific ordering, alphabetized or reverse alphabetized.
* Make it so when the client requests occupations with a order query parameter, return an alphabetized list for `order=desc` and a reverse alphabetized list for `order=asc` (if your occupations endpoints are arrays of strings, you can simply use the Javascript `.sort()` and `.reverse()` methods of an array to do your sorting).

#### Step 5: Make writable endpoints
Now you're going to make some endpoints that can be added to or modified by `POST` or `PUT` requests.

###### `PUT /name`
- Changes your name

###### `PUT /location`
- Updates your current location.

###### `POST /hobbies`
- Adds to your list of hobbies.

###### `POST /occupations`
- Adds to your list of occupations.

#### Step 6: Create skills endpoint
This endpoint is going to be a bit more complicated than those you've made previously. For skills, we need to store a more complicated data structure. Here's how your skill could be structured:

```javascript
{
  "id": 1,
  "name": "Javascript",
  "experience": "Intermediate"
}
```

* In your server code, make an array that holds all of your skills. Be sure to define the array outside of the `app.get` or `app.post` methods, as it needs to persist (scope) outside of those methods and maintain its data. The array will hold 'skill' objects like the example above.
* Create the endpoint

###### `GET /skillz`
- Retrieve the list of skills

- Also, allow an 'experience' query parameter so that someone can retrieve a list of skills that match a certain level of experience, like so:

`GET /skillz?experience=Intermediate`

###### `POST /skillz`
- Add a skill to the collection of skills. For this endpoint let's create some middleware that will dynamically create IDs for us based on array length. This function will go inside of our `middleware.js` file. Because we only want to use this middleware on our skillz 'POST' endpoint we don't want to use the `app.use()` method; instead we want to pass it into our endpoint's arguments, like so:

```javascript
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);
```

If this request is timing out, make sure you didn't forget to include the `next()` call inside your middleware!

#### Step 7: Secrets
Let's create one more endpoint, somewhere we want to hide our deep dark secrets. We don't want just anyone accessing our secrets, so lets have a username and PIN parameter to make sure that *you* are _**you!**_

```javascript
app.get('/secrets/:username/:pin', /*...*/);`
```

(Note that you probably shouldn't use your actual PIN here when testing). We'll need another set of middleware to handle this function, so create a new method in your `middleware.js` named `verifyUser`. This method should check that the parameters match a username and PIN you set. If they do, pass the request on to the `next` function; otherwise, send an error message back to the user without moving to the next function.

#### Step 8 (Black Diamond): Allow for more queries/params
* Let users search your hobbies, occupations, and skills endpoints by name.
* Try to use `req.params` and `req.query` at least once each.

#### Step 9 (Black Diamond): Create a simple Angular app for your API
* In a separate directory, create an Angular application
* Using ui.router, create three routes: `/`, `/me`, and `/skills`
  * `/`: a homepage containing basic information about you (name and location)
  * `/me`: detailed information about you: hobbies and occupations
  * `/skillz`: a page to display your skills
* Create a service that handles the network requests (hint: you could create a method for each endpoint, or you could consolidate some into the same method)
* If you arrive this far, go ahead and make some text inputs and add the logic necessary to edit or add to any of the "writeable" endpoints.

## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
