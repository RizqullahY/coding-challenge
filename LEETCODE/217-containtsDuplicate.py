# Solution 1

# from typing import List


# class Solution:
#     def containsDuplicate(self, nums: List[int]) -> bool:
#         nums.sort()
#         # Iterasi (length / jumlah dari item list) - 1 
#         for i in range(len(nums) - 1):
#             # Bila angka dengan index sekarang sama dengan index setelahnya
#             if nums[i] == nums[i + 1]:
#                 # Stop function dan kembalikan nilai true
#                 return True
#         return False


# sl = Solution()
# print(sl.containsDuplicate([1, 2, 3, 4, 5]))
# print(sl.containsDuplicate([1, 2, 3, 4, 1]))


'''
Bayangkan sebuah keranjang buah:

Keranjang: Ini adalah array kita. Di dalamnya, kita memiliki berbagai jenis buah (nilai).
Buah: Setiap buah mewakili sebuah nilai dalam array.
Duplikasi: Ada beberapa buah yang sama jenisnya (nilai yang sama).
Bagaimana kita mengetahui ada buah yang sama?

Urutkan buah: Kita bisa mengurutkan semua buah berdasarkan jenisnya. Buah-buah yang sama jenisnya akan berdekatan.
Bandingkan buah berdekatan: Setelah diurutkan, kita tinggal membandingkan setiap buah dengan buah di sebelahnya. Jika jenisnya sama, berarti ada duplikasi.
Buat catatan: Kita bisa membuat daftar buah yang sudah kita temui. Jika ada buah baru yang sama dengan yang sudah ada di daftar, berarti ada duplikasi.
Dalam konteks pemrograman:

Mengurutkan: Python menyediakan fungsi built-in untuk mengurutkan list.
Membandingkan: Kita bisa menggunakan perulangan untuk membandingkan setiap elemen dengan elemen berikutnya.
Mencatat: Kita bisa menggunakan struktur data seperti set atau dictionary untuk mencatat elemen yang sudah muncul.
Contoh skenario:

Misalnya kita punya array [1, 2, 3, 2, 5]. Setelah diurutkan, menjadi [1, 2, 2, 3, 5]. Kita bisa melihat bahwa angka 2 muncul dua kali secara berurutan, sehingga ada duplikasi.

Mengapa perlu mengecek duplikasi?

Membuat data lebih efisien: Data yang tidak memiliki duplikasi akan menghemat ruang penyimpanan dan mempercepat proses pengolahan.
Mencegah kesalahan: Duplikasi data bisa menyebabkan hasil analisis yang salah.
Memperbaiki kualitas data: Menghapus duplikasi adalah salah satu langkah penting dalam membersihkan data.
Nanti, kita akan bahas lebih lanjut dengan contoh kode Python.

Apakah Anda ingin melihat contoh kode Python untuk melakukan pengecekan duplikasi?

Atau, apakah Anda punya pertanyaan lain terkait topik ini?



Tentu, mari kita lihat beberapa contoh kode Python untuk mengecek duplikasi nilai dalam sebuah array:

1. Menggunakan set:

Python

def cek_duplikasi_set(arr):
  """Mengecek duplikasi dalam array menggunakan set.

  Args:
    arr: Array yang akan diperiksa.

  Returns:
    True jika ada duplikasi, False jika tidak ada.
  """

  return len(set(arr)) != len(arr)

# Contoh penggunaan
my_array = [1, 2, 3, 2, 5]
print(cek_duplikasi_set(my_array))  # Output: True
Penjelasan:

Set: Sebuah struktur data yang tidak mengizinkan elemen duplikat.
Cara kerja: Dengan mengubah array menjadi set, elemen duplikat akan otomatis dihilangkan. Jika panjang set setelah konversi berbeda dengan panjang array asli, berarti ada duplikasi.
2. Menggunakan dictionary:

Python

def cek_duplikasi_dict(arr):
  """Mengecek duplikasi dalam array menggunakan dictionary.

  Args:
    arr: Array yang akan diperiksa.

  Returns:
    True jika ada duplikasi, False jika tidak ada.
  """

  seen = {}
  for num in arr:
    if num in seen:
      return True
    seen[num] = True
  return False

# Contoh penggunaan
my_array = [1, 2, 3, 2, 5]
print(cek_duplikasi_dict(my_array))  # Output: True
Penjelasan:

Dictionary: Sebuah struktur data yang menyimpan pasangan kunci-nilai.
Cara kerja: Setiap elemen array digunakan sebagai kunci dalam dictionary. Jika sebuah elemen muncul lagi, artinya kunci tersebut sudah ada, sehingga ada duplikasi.
3. Menggunakan perulangan dan pengurutan:

Python

def cek_duplikasi_sort(arr):
  """Mengecek duplikasi dalam array dengan mengurutkan terlebih dahulu.

  Args:
    arr: Array yang akan diperiksa.

  Returns:
    True jika ada duplikasi, False jika tidak ada.
  """

  arr.sort()
  for i in range(len(arr) - 1):
    if arr[i] == arr[i+1]:
      return True
  return False

# Contoh penggunaan
my_array = [1, 2, 3, 2, 5]
print(cek_duplikasi_sort(my_array))  # Output: True
Penjelasan:

Mengurutkan: Elemen-elemen array diurutkan sehingga elemen yang sama berdekatan.
Membandingkan: Setiap elemen dibandingkan dengan elemen berikutnya. Jika ada yang sama, berarti ada duplikasi.
Pilihan metode:

Set: Paling efisien untuk kasus umum.
Dictionary: Fleksibel dan bisa digunakan untuk menyimpan informasi tambahan tentang elemen.
Pengurutan: Cocok jika kita ingin mengurutkan array terlebih dahulu untuk keperluan lain.
Penting:

Efisiensi: Metode menggunakan set biasanya paling efisien.
Kegunaan lain: Selain mengecek duplikasi, metode ini bisa digunakan untuk mendapatkan nilai unik, menghitung frekuensi kemunculan, dan lain-lain.
Pilih metode yang paling sesuai dengan kebutuhan dan kompleksitas masalah Anda.

Apakah Anda ingin melihat contoh lain atau memiliki pertanyaan lebih lanjut?











Gemini dapat membuat kesalahan, jadi perik


'''