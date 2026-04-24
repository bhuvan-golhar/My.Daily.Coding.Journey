// Java class: Equality checker

package projectFolder;

import java.util.Scanner;

public class EqualityChecker
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter the first integer = ");
        int a = scan.nextInt();
        System.out.print("Enter the second integer = ");
        int b = scan.nextInt();
        if (a == b)
        {
            System.out.println("Both integers are equal");
        }
        else
        {
            System.out.println("The integers are not equal");
        }
    }
}
