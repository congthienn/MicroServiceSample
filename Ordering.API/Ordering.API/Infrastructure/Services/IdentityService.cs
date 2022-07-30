namespace Microsoft.eShopOnContainers.Services.Ordering.API.Infrastructure.Services;

public class IdentityService : IIdentityService
{
    private IHttpContextAccessor _context;

    public IdentityService(IHttpContextAccessor context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public string GetUserIdentity()
    {
        //return _context.HttpContext.User.FindFirst("sub").Value;
        return "42b1459c-cbff-4af9-87a2-a6952f69d0b7";
    }

    public string GetUserName()
    {
        return _context.HttpContext.User.Identity.Name;
    }
}
