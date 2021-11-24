using HighfieldRecruitmentTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace HighfieldRecruitmentTest.BusinessLogic
{
    public class UserHandlers
    {
        private static readonly HttpClient client = new HttpClient();
        public async Task<Array> GetSortedColourFrequency()
        {
            var streamTask = client.GetStreamAsync("https://recruitment.highfieldqualifications.com/api/test");
            List<User> UserList = await JsonSerializer.DeserializeAsync<List<User>>(await streamTask);
            Dictionary<string, int> ColourFrequency = new Dictionary<string, int>();

            foreach (User data in UserList)
            {
                if (!ColourFrequency.TryAdd(data.favouriteColour, 1))
                {
                    ColourFrequency[data.favouriteColour]++;
                }
            }

            ColourFrequency = ColourFrequency.OrderByDescending(x => x.Value).ToDictionary(x => x.Key, x => x.Value);

            return ColourFrequency.ToArray();
        }

        public async Task<Array> GetUsersOver20YearsOld()
        {
            var streamTask = client.GetStreamAsync("https://recruitment.highfieldqualifications.com/api/test");
            List<User> UserList = await JsonSerializer.DeserializeAsync<List<User>>(await streamTask);

            Dictionary<string, string> Ovar20sDic = new Dictionary<string, string>();

            foreach (User data in UserList)
            {
                int age = DateTime.Now.Year - data.dob.Year;
                if (age >= 20)
                {
                    Ovar20sDic.Add(data.firstName + " " + data.lastName, data.dob.ToString("MMMM dd, yyyy"));
                }
            }

            return Ovar20sDic.ToArray();
        }
    }
}
