using Application.Photos;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
    public interface IPhotoAccessor
    {
        PhotoUploadResult AddPhoto(IFormFile file); // we get back from cloudinary an imageuploadresult object, but we don't have a dependency on cloudinary to get access to that class. So we create our own class to store the results.
        string DeletePhoto(string publicId);
    }
}