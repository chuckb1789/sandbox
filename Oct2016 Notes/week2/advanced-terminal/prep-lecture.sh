# create a playground directory in which we can work
pg=~/playground
# remove any previous files this script created
rm -rf $pg
# create a directory in which students can play
mkdir $pg
cd $pg

# make some directories
mkdir -p $pg/deep-dir/level1/level2/level3/level4/level5/level6/level7/level8/level9/level10

# make a hidden file
echo secret > $pg/deep-dir/level1/level2/.hidden

# make a file with some text - including a secret word
cat <<EOF > text-file
Bacon ipsum dolor amet corned beef frankfurter strip steak ribeye sirloin salami jowl leberkas spare ribs. Turkey corned beef kielbasa short ribs tail picanha shoulder brisket alcatra prosciutto drumstick rump pork chop. Pig chicken short loin leberkas, picanha biltong ball tip. Tenderloin filet mignon biltong cupim.

Salami tenderloin brisket ham hock ham strip steak boudin picanha ball tip biltong prosciutto filet mignon jowl cow leberkas. Pork loin hamburger tongue shankle. Jerky pork belly pork biltong capicola chicken kevin ribeye pork chop chuck sausage brisket. Ham tri-tip ribeye drumstick t-bone cupim tail strip steak porchetta boudin sausage pork belly biltong ball tip. Kevin meatball turkey picanha. Swine prosciutto beef ribs leberkas cow chuck doner shoulder short ribs.

Hamburger pork belly fatback prosciutto. Ham venison pork loin alcatra. Ham chicken jowl, tongue drumstick flank picanha biltong salami andouille venison bresaola shoulder boudin. Beef ground round frankfurter alcatra swine, ribeye prosciutto shank boudin filet mignon. Corned beef pork beef ribs, short loin frankfurter secret ground round shankle ribeye. Capicola shankle bresaola jerky. Short loin leberkas pork belly, sausage meatloaf shank jowl ham hock jerky.

Pancetta brisket biltong prosciutto ribeye jowl pork belly. Short ribs swine sausage venison shank, biltong ball tip ground round tongue tenderloin. Bresaola corned beef sausage shank ham hock cow beef ribs meatball pastrami turducken filet mignon ham cupim short loin hamburger. Sirloin drumstick filet mignon, tail shank picanha bresaola ball tip chicken.

Brisket strip steak ham hock, turkey tri-tip pig prosciutto. Corned beef jowl sausage tri-tip short ribs pork doner turkey tail meatloaf shank. Short loin drumstick corned beef, bresaola andouille pork chop hamburger capicola. Pig short ribs meatball, beef ribs corned beef andouille tri-tip pork belly chicken pancetta.
EOF

# make a file with a lot of lines
for i in {1..100}
do
  echo "line $i" >> big-file
  if [ $i = 25 ]; then
    echo "Keep on going!" >> big-file
  fi
  if [ $i = 50 ]; then
    echo "Wait!  Go back." >> big-file
  fi
done

# make a directory with a lot of files
mkdir $pg/big-dir
cd $pg/big-dir
for i in {1..999}
do
  touch file$i
done
chmod 666 $pg/big-dir/file666
cd $pg

# create a simple shell script to demonstrate variables
echo "echo \$greeting \$USER" > hi
chmod 666 hi

# make a file owned by root
echo "Keep out!" > not-my-file
sudo su <<!
chown root $pg/not-my-file
chgrp staff $pg/not-my-file
chmod 400 $pg/not-my-file
!

# create some files with different permissions
echo "Three little piggies" > house-of-straw
echo "Three little piggies" > house-of-sticks
echo "Three little piggies... and Grandma. Watch out! She's got a gun!" > house-of-bricks
chmod 666 house-of-straw
chmod 444 house-of-sticks
chmod 000 house-of-bricks


