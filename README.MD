# Auth Server Implemenation example using jsonWebTokens

This example web server has a seperate authServer and applcation server.  The auth server only handles the generation of webtokens and becuase the app secrets are shared they don't have to be generated by the same application.  An Implemation like this means one could implement a single auth server and not have to tightly couple it to each applciation.  Effectively you would have one service for authenticiation of everything.  Very cool.  

In another branch we will look at the implementation of expiring webtokens.  Might be using this to provide greater secruity.  Learned from https://www.youtube.com/watch?v=mbsmsi7l3r4

Thanks Web Dev Simplified!