/*
FROM/Credit: https://gist.github.com/paulmach/7271283

Serve is a very simple static file server in go
Usage:
-p="8100": port to serve on
  -d=".":    the directory of static files to host
  Navigating to http://localhost:8100 will display the index.html or directory
  listing file.

Stoopid simple static server for fullcalendar JS.
*/
package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
	port := flag.String("p", "8100", "port to serve on")
	directory := flag.String("d", ".", "the directoryirectory of static file to host")
	flag.Parse()

	http.Handle("/", http.FileServer(http.Dir(*directory)))

	log.Printf("Serving %s on HTTP portt: %s\n", *directory, *port)
	log.Fatal(http.ListenAndServe(":"+*port, nil))
}
