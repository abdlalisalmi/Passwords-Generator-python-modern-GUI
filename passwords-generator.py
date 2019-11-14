import os
import random

def head():
    os.system("clear")
    print('''\033[1;32;40m
              #######   ##    ##  #######              ######   ########  ##    ##  ########  #######      ##     ########    ####    #######
              ##    ##  ## ## ##  ##    ##            ##        ##        ###   ##  ##        ##    ##    ####       ##      ##  ##   ##    ##
              #######   ## ## ##  ##    ##   ######   ##  ####  #######   ## ## ##  #######   #######    ##  ##      ##     ##    ##  #######
              ##        ## ## ##  ##    ##            ##    ##  ##        ##  ####  ##        ## ##     ########     ##      ##  ##   ## ##
              ##         ##  ##   #######              ######   ########  ##    ##  ########  ##   ##   ##    ##     ##       ####    ##   ##       
        \033[0;37;40m''')
    
    print("")
    print("\033[1;32;40mPassword Generate\033[0;37;40m is a program allows you to generate as many passwords as you want.")
    print(" \033[1;31mNB\033[0;37;40m - You will be able to choose the number of passwords to generate and the number of characters for each password!")
    print("")
    print("------------------------------------------------")


def pass_generate(pass_number, pass_len):
    chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
             '!', '@', '$', '%', '&', '*', '(', ')', '-', '+', '?', '#', 
             'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
             'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    password_to_save = ""
    print("-" * (pass_len + 14))
    x = 0
    while (x < pass_number):
        password = ""
        i = 0
        while (i < pass_len):
            password = password +  chars[random.randint(0,len(chars) - 1)]
            i = i + 1
        print("Password {} : \033[1;32;40m {} \033[0;37;40m".format(x + 1, password))
        password_to_save = password_to_save + "\n" + "Password " + str(x + 1) + " : " + password
        print("-" * (pass_len + 14))
        x = x + 1
    return(password_to_save)

def main():

    head()

    pass_number = int(input("\033[1;31m[1] - How many password you want ? : \033[0;37;40m"))
    pass_len = int(input("\033[1;31m[2] - How many characters in each password ? : \033[0;37;40m"))

    save = input("\033[1;31m[3] - Do you want to save the passwords in a file ? (yes/no) : \033[0;37;40m")
    save = save.upper()

    save_file = pass_generate(pass_number, pass_len)

    if (save == "YES" or save == "Y"):
        pass_file = open("pwd_generator.txt", "w")
        file = pass_file.write(save_file)
        pass_file.close()
        print("The passwords has been saved in the file \033[1;32;40m'pwd_generator.txt'\033[0;37;40m :)")


if __name__ == '__main__':
    main()
