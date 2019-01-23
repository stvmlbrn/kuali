I realized an oversight in my implementation during the development process, but was too far along with limited time to fix it. The problem is that when a user attempts to call an elevator, the program does not take into consideration the direction the user wants to move. This could result in a moving elevator stopping to pick somebody up, then moving opposite of its original direction.

Also, I didn't get time to implement a method to simulate moving to a different floor after an elevator has been called with fetchElevator()
