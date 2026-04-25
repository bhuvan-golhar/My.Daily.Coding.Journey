// Java class: Temperature measurement

package projectFolder;

import java.util.Scanner;

public class TemperatureMeasurement
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter the room temperature = ");
        int temp = scan.nextInt();
        if (temp > 30)
        {
            System.out.println("It is hot");
        }
        else if (temp < 15)
        {
            System.out.println("It is cold");
        }
        else
        {
            System.out.println("It is moderate");
        }
    }
}
