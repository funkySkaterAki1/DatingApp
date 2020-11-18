using System;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<User> Login(string username, string password)
        {
<<<<<<< HEAD
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(x => x.Username == username);

            if (user == null)
                return null;
            
=======
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);

            if (user == null)
                return null;

>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
<<<<<<< HEAD
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

                for (int i=0; i< computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
            }
=======
               using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
             
              var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

               for (int i = 0; i < computedHash.Length; i++)
               {
                   if (computedHash[i] != passwordHash[i]){
                       return false;
                   }
               } 
            }

>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
<<<<<<< HEAD

=======
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
<<<<<<< HEAD
            
=======

>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
<<<<<<< HEAD
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
=======
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Users.AnyAsync(x => x.Username == username))
<<<<<<< HEAD
                return true;
=======

            {
                return true;   
            }
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd

            return false;
        }
    }
}