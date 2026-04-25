// Java class: Positive negative

package projectFolder;

import java.util.Scanner;

public class PositiveNegative
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter any integer = ");
        int num = scan.nextInt();
        if (num > 0)
        {
            System.out.println("The integer is positive");
        }
        else
        {
            System.out.println("The integer is negative");
        }
    }
}
