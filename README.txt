This is a prompt generator I made for a friend when she was dealing with writer's block! There are 50 prompts loaded in which I have either found on Pinterest or created myself. In essence, this is a randomiser which will retrieve the relevant text from another JavaScript file and display a prompt in the console for you.

To access and edit this generator, you will need to:
1) Download and open this project in your chosen IDE (I use Visual Studio Code)
2) Go to prompts.js and add a new entry to prompts. You can delete or add as many as you like. However, all entries must be in the same format.
    {
        key: n,
        title: 'Your Title Here',
        description: ' Your prompt here.'
    },
n must be the next sequential integer and the first prompt must be 0.
The title and description must be strings. Just edit the text on the right of : inbetween the speech/quotation marks. It might help to use alt+z on this file so you don't have to scroll sideways to check your writing!
3) Once you've editted the prompts.js file, save it.
4) Now that you're all done, go to the terminal and type node script.js to run the program. It will return a prompt in the console!

Hope this helps to beat writer's block!
Thank you for taking a look :)