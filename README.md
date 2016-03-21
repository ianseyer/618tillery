# 618 Tillery Website
* * *
> This website is designed the encapsulate both security, member signup, and public viewing of Tillery events, projects, and public member profiles.

#### *Stack*
**SERVER**
* Node.JS API (Strongloop)
* Angular (frontend)
* PostGreSQL
* Rocket.Chat or Mattermost

**RFID**
* BeagleBone
* RFID Scanner
* Electromagnetic Lock
* Node.JS for network interface


### Splash Page
- - -
> This will be handled with a typical WYSIWIG editor such as Squarespace, with links to external functionality.

### RFID
- - -
> This is a completely locally hosted security system responsible for physical access control. Each door will be equiped with a RFID scanner and network-connected (cat6 or wifi) microcontroller for authentication purposes. Successful authentication will result in the door being unlocked for a pre-determined time interval.

### Admin
- - -
> Seperately authenticated application. Responsible for monitoring entry/exit, managing payments, and controlling memberships.
### Member Sign up
- - -
> Fairly straight forward, but we will capture payment information, intended, plan, and publically viewable information at this point. **This will trigger a notification on the admin side, requiring approval and RFID assignment**

### Profile View
- - -
> Individual member view. Displays "checked in today?", skills, open to freelance, chat handle, etc.
> **Potential chat integration point - click "message me"**
### Rolodex
- - -
> Catalogue of all members, essentially a list of individual profile views.
