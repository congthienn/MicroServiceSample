namespace Microsoft.eShopOnContainers.WebMVC;

public class AppSettings
{
    //public Connectionstrings ConnectionStrings { get; set; }
    public string PurchaseUrl { get; set; } = "http://localhost:57425";
    public string SignalrHubUrl { get; set; }
    public bool ActivateCampaignDetailFunction { get; set; }
    public Logging Logging { get; set; }
    public bool UseCustomizationData { get; set; }
}

public class Connectionstrings
{
    public string DefaultConnection { get; set; }
}

public class Logging
{
    public bool IncludeScopes { get; set; }
    public Loglevel LogLevel { get; set; }
}

public class Loglevel
{
    public string Default { get; set; }
    public string System { get; set; }
    public string Microsoft { get; set; }
}
