// Java class: Even odd

package projectFolder;

import java.util.Scanner;

public class EvenOdd
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter any integer = ");
        int num = scan.nextInt();
        if (num % 2 == 0)
        {
            System.out.println("The integer is even");
        }
        else
        {
            System.out.println("The integer is odd");
        }
    }
}
