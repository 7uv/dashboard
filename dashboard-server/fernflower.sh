#!/bin/sh

# VERSION="2018-07-18"
# created by Sayantan Ghosh

java -cp rtf-app/resources/fernflower.jar org.jetbrains.java.decompiler.main.decompiler.ConsoleDecompiler -hdc=0 -dgs=1 -rsy=1 -rbr=1 -lit=1 -nls=1 -mpm=60 *.jar output/