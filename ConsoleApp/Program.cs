// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Sample s = new Sample();
s.PrintA();
s.PrintB(); // waiting to complete PrintA()

Console.ReadLine();



public class Sample
{
    public async Task PrintA()
    {
        await Task.Run(() =>
        {
            for (int i = 1; i <= 5; i++)
            {
                Console.WriteLine($"PrintA() : {i}");
            }
        });
    }
    public async void PrintB()
    {
        await Task.Run(() =>
        {
            for (int i = 1; i <= 5; i++)
            {
                Console.WriteLine($"PrintB() : {i}");
            }
        });
    }
}